<template>
  <div>
    <b-card no-body class="full-screen">
      
      <b-row class="mx-0">
        <b-col class="text-left">
          <span class="h3">Page2</span>
        </b-col>
        <b-col class="text-right">
          <b-button variant="outline-primary" size="sm" @click="addNewItem">Add</b-button>
        </b-col>
      </b-row>

      <b-table-simple bordered hover small responsive sticky-header class="h-100 mb-0 d-inline-block sticky-table">
        <b-thead head-variant="dark">
          <b-tr>
            <b-th class="text-nowrap">#</b-th>
            <b-th class="text-nowrap">Id</b-th>
            <b-th class="text-nowrap">Name</b-th>
            <b-th class="text-nowrap">Year</b-th>
            <b-th class="text-nowrap">Pantone Value</b-th>
            <b-th class="text-nowrap">Action</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-for="(item, $index) in properties" :key="$index">
            <b-tr>
              <b-td class="text-center">{{$index + 1}}</b-td>
              <b-td>{{item.id}}</b-td>              
              <b-td>{{item.name}}</b-td>
              <b-td>{{item.year}}</b-td>
              <b-td>{{item.pantone_value}}</b-td>
              <b-td class="text-center">
                <b-button class="crud-action" size="sm" variant="outline-primary" @click="viewItem(item)">
                  <font-awesome-icon :icon="['fas', 'eye']"/>
                </b-button>
                <b-button class="crud-action" size="sm" variant="outline-info" @click="editItem(item)">
                  <font-awesome-icon :icon="['fas', 'pencil-alt']"/>
                </b-button>
                <b-button class="crud-action" size="sm" variant="outline-danger" @click="deleteItem(item)">
                  <font-awesome-icon :icon="['fas', 'trash-alt']"/>
                </b-button>
              </b-td>
            </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card>

    <b-modal ref="modal-crud-properties" id="modal-crud-properties" size="lg" :title="writeMode" hide-footer>
      <b-row>
        <b-col>
          <b-overlay :show="isLoading" rounded="sm" >
              <b-form @submit="writeItem">
                <b-form-group
                    id="input-name-group"
                    label="Name:"
                    label-for="input-name">
                    <b-form-input
                      id="input-name"
                      type="text"
                      placeholder="Enter Name"
                      required
                      v-model="modalItem.name"
                      :disabled="disableModalItem"/>                      
                </b-form-group>

                <b-form-group
                    id="input-year-group"
                    label="Year:"
                    label-for="input-year">
                    <b-form-input
                      id="input-year"
                      type="text"
                      placeholder="Enter year"
                      v-model="modalItem.year"
                      :disabled="disableModalItem"/>                      
                </b-form-group>

                <b-form-group
                    id="input-pantone-value-group"
                    label="Pantone Value:"
                    label-for="input-pantone-value">
                    <b-form-input
                      id="input-pantone-value"
                      type="text"
                      placeholder="Pantone Value"
                      v-model="modalItem.pantone_value"
                      :disabled="disableModalItem"/>                      
                </b-form-group>
                
                <b-row>
                  <b-col class="text-right">
                    <b-button type="button" size="sm" variant="danger" @click="hideModal">Cancel</b-button>
                    <b-button type="submit" size="sm" variant="primary" v-if="!disableModalItem">Save</b-button>
                  </b-col>
                </b-row>
              </b-form>
          </b-overlay>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import authuser from "@/inheritance/authuser";

export default {
  computed: { 
    ...mapState([]),
    disableModalItem() {
      return this.writeMode === "View"
    },
    properties(){
      return this.responseData.data;
    }
  },
  mixins:[authuser],
  data() { 
    return { 
      responseData : {},
      modalItem : {},
      addingItem : { },
      isLoading : false,
      writeMode : ""
    } 
  },
  mounted() {
    this.getProperties()
  },
  methods : {
    ...mapMutations([]),

    async getProperties() {
      const { status, data } = await this.$getProperties()
      if(status === 200){
        this.responseData = data
      }else{
        console.error("Response", "Error")
      }
    },
    async deleteItem() {
      const response = await this.$confirmDelete(this)
      if(response){

      }
    },

    showModal(){
      this.$refs["modal-crud-properties"].show()
    },
    hideModal(){
      this.$refs["modal-crud-properties"].hide()
    },

    addNewItem() {
      this.writeMode = "Add"
      this.modalItem = this.addingItem
      this.showModal()
    },
    editItem(item) {
      this.writeMode = "Edit"
      this.modalItem = item
      this.showModal()
    },
    viewItem(item) {
      this.writeMode = "View"
      this.modalItem = item
      this.showModal()
    },

    async writeItem(event) {
      event.preventDefault()
      this.isLoading = true

      if(this.writeMode === "Add") {
        try {        
          const { status, data } = await this.$addProperty(this.modalItem)
          if(status === 200) {
            this.properties.push(data)
            this.addingItem = { }
            this.hideModal()
            this.$toAst(this, "Added Successfully", "success")
          } else {
            console.error("Error Add Property") 
          }
        } catch ({message, response}) {
           const errorMessage = response ? response.data : message
           this.$toAst(this, errorMessage, "danger")
        }
      }

      if(this.writeMode === "Edit") {
        try {
          const { status, data } = await this.$editProperty(this.modalItem)
          if(status === 200) {        
            this.$set(this.properties, this.properties.findIndex(({id}) => id === this.modalItem.id), this.$deepClone(this.modalItem))//Reactivity in Depth
            this.hideModal()
            this.$toAst(this, "Updated Successfully", "success")
          } else {
            console.error("Error Edit Property") 
          }
        } catch ({message, response}) {
           const errorMessage = response ? response.data : message
           this.$toAst(this, errorMessage, "danger")
        }
      }
      
      this.isLoading = false
    }
  }
}
</script>
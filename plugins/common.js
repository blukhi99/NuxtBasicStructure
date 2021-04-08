export default (context, inject) => {

    inject('deepClone', (_object) => Object.assign({}, _object))

    inject('toAst', (_context, message, variant) => _context.$bvToast.toast(message, {title : "Alert",variant: variant, solid: true }))

    inject('confirmDelete', (_context) => {
        return  _context.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
                  title: 'Please Confirm',
                  size: 'sm',
                  buttonSize: 'sm',
                  okVariant: 'danger',
                  okTitle: 'YES',
                  cancelTitle: 'NO',
                  footerClass: 'p-2',
                  hideHeaderClose: false,
                  centered: true
              })
    })

    inject('byString', (o, s) => {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, ''); // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    })
}
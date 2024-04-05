var cart = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    addItem: function(item) {
        this.items.push(item);
        localStorage.setItem('cart', JSON.stringify(this.items));
    },
    removeItem: function(item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(this.items));
        }
    },
    getItems: function() {
        return this.items;
    }
};
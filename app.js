window.app.instance = {
    handleInputEnter: function(input) {
        alert('Enter Was Pressed:' + input.element.value);
        return input;
    },
    addListItem: function(input) {
        return input;
    }
};
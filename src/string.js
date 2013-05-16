function stringHashFn() {
    var hash = 757602046;
    if (!this.length) {
    	return hash;
    }
    for (var i = 0, len = this.length; i < len; i++) {
        var character = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash;
    }
    return hash;
};

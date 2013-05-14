function numberHashFn(key) {
    var c2 = 0x27d4eb2d; // a prime or an odd constant
    key = (key ^ 61) ^ (key >>> 16);
    key = key + (key << 3);
    key = key ^ (key >>> 4);
    key = key * c2;
    key = key ^ (key >>> 15);
    return key;
}
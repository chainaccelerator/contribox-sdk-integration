function getEntropy(size) {
    
    const bytes = new Uint8Array(size);

    // load cryptographically random bytes into array
    window.crypto.getRandomValues(bytes);

    // convert byte array to hexademical representation
    // const bytesHex = bytes.reduce((o, v) => o + ('00' + v.toString(16)).slice(-2), '');
    const bytesHex = bytes.reduce((accumulator, current) => accumulator + (current.toString(16)), '');

    return bytesHex;
    // convert hexademical value to a decimal string
    // return BigInt('0x' + bytesHex).toString(10);
}

export { getEntropy }
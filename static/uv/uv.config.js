self.__uv$config = {
    prefix: '/service/',
    /* Use a public bare server URL here */
    bare: 'https://uv.holyubofficial.net/bare/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

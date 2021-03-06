// copied here from GH Actions results

const OS = 'MacOS 10.15.6 (19G2021)'

exports = module.exports = [
    [ -7, [ 'E2BIG', 'argument list too long' ] ],
    [ -13, [ 'EACCES', 'permission denied' ] ],
    [ -48, [ 'EADDRINUSE', 'address already in use' ] ],
    [ -49, [ 'EADDRNOTAVAIL', 'address not available' ] ],
    [ -47, [ 'EAFNOSUPPORT', 'address family not supported' ] ],
    [ -35, [ 'EAGAIN', 'resource temporarily unavailable' ] ],
    [ -3000, [ 'EAI_ADDRFAMILY', 'address family not supported' ] ],
    [ -3001, [ 'EAI_AGAIN', 'temporary failure' ] ],
    [ -3002, [ 'EAI_BADFLAGS', 'bad ai_flags value' ] ],
    [ -3013, [ 'EAI_BADHINTS', 'invalid value for hints' ] ],
    [ -3003, [ 'EAI_CANCELED', 'request canceled' ] ],
    [ -3004, [ 'EAI_FAIL', 'permanent failure' ] ],
    [ -3005, [ 'EAI_FAMILY', 'ai_family not supported' ] ],
    [ -3006, [ 'EAI_MEMORY', 'out of memory' ] ],
    [ -3007, [ 'EAI_NODATA', 'no address' ] ],
    [ -3008, [ 'EAI_NONAME', 'unknown node or service' ] ],
    [ -3009, [ 'EAI_OVERFLOW', 'argument buffer overflow' ] ],
    [ -3014, [ 'EAI_PROTOCOL', 'resolved protocol is unknown' ] ],
    [ -3010, [ 'EAI_SERVICE', 'service not available for socket type' ] ],
    [ -3011, [ 'EAI_SOCKTYPE', 'socket type not supported' ] ],
    [ -37, [ 'EALREADY', 'connection already in progress' ] ],
    [ -9, [ 'EBADF', 'bad file descriptor' ] ],
    [ -16, [ 'EBUSY', 'resource busy or locked' ] ],
    [ -89, [ 'ECANCELED', 'operation canceled' ] ],
    [ -4080, [ 'ECHARSET', 'invalid Unicode character' ] ],
    [ -53, [ 'ECONNABORTED', 'software caused connection abort' ] ],
    [ -61, [ 'ECONNREFUSED', 'connection refused' ] ],
    [ -54, [ 'ECONNRESET', 'connection reset by peer' ] ],
    [ -39, [ 'EDESTADDRREQ', 'destination address required' ] ],
    [ -17, [ 'EEXIST', 'file already exists' ] ],
    [ -14, [ 'EFAULT', 'bad address in system call argument' ] ],
    [ -27, [ 'EFBIG', 'file too large' ] ],
    [ -65, [ 'EHOSTUNREACH', 'host is unreachable' ] ],
    [ -4, [ 'EINTR', 'interrupted system call' ] ],
    [ -22, [ 'EINVAL', 'invalid argument' ] ],
    [ -5, [ 'EIO', 'i/o error' ] ],
    [ -56, [ 'EISCONN', 'socket is already connected' ] ],
    [ -21, [ 'EISDIR', 'illegal operation on a directory' ] ],
    [ -62, [ 'ELOOP', 'too many symbolic links encountered' ] ],
    [ -24, [ 'EMFILE', 'too many open files' ] ],
    [ -40, [ 'EMSGSIZE', 'message too long' ] ],
    [ -63, [ 'ENAMETOOLONG', 'name too long' ] ],
    [ -50, [ 'ENETDOWN', 'network is down' ] ],
    [ -51, [ 'ENETUNREACH', 'network is unreachable' ] ],
    [ -23, [ 'ENFILE', 'file table overflow' ] ],
    [ -55, [ 'ENOBUFS', 'no buffer space available' ] ],
    [ -19, [ 'ENODEV', 'no such device' ] ],
    [ -2, [ 'ENOENT', 'no such file or directory' ] ],
    [ -12, [ 'ENOMEM', 'not enough memory' ] ],
    [ -4056, [ 'ENONET', 'machine is not on the network' ] ],
    [ -42, [ 'ENOPROTOOPT', 'protocol not available' ] ],
    [ -28, [ 'ENOSPC', 'no space left on device' ] ],
    [ -78, [ 'ENOSYS', 'function not implemented' ] ],
    [ -57, [ 'ENOTCONN', 'socket is not connected' ] ],
    [ -20, [ 'ENOTDIR', 'not a directory' ] ],
    [ -66, [ 'ENOTEMPTY', 'directory not empty' ] ],
    [ -38, [ 'ENOTSOCK', 'socket operation on non-socket' ] ],
    [ -45, [ 'ENOTSUP', 'operation not supported on socket' ] ],
    [ -1, [ 'EPERM', 'operation not permitted' ] ],
    [ -32, [ 'EPIPE', 'broken pipe' ] ],
    [ -100, [ 'EPROTO', 'protocol error' ] ],
    [ -43, [ 'EPROTONOSUPPORT', 'protocol not supported' ] ],
    [ -41, [ 'EPROTOTYPE', 'protocol wrong type for socket' ] ],
    [ -34, [ 'ERANGE', 'result too large' ] ],
    [ -30, [ 'EROFS', 'read-only file system' ] ],
    [
        -58,
        [ 'ESHUTDOWN', 'cannot send after transport endpoint shutdown' ]
    ],
    [ -29, [ 'ESPIPE', 'invalid seek' ] ],
    [ -3, [ 'ESRCH', 'no such process' ] ],
    [ -60, [ 'ETIMEDOUT', 'connection timed out' ] ],
    [ -26, [ 'ETXTBSY', 'text file is busy' ] ],
    [ -18, [ 'EXDEV', 'cross-device link not permitted' ] ],
    [ -4094, [ 'UNKNOWN', 'unknown error' ] ],
    [ -4095, [ 'EOF', 'end of file' ] ],
    [ -6, [ 'ENXIO', 'no such device or address' ] ],
    [ -31, [ 'EMLINK', 'too many links' ] ],
    [ -64, [ 'EHOSTDOWN', 'host is down' ] ],
    [ -4030, [ 'EREMOTEIO', 'remote I/O error' ] ],
    [ -25, [ 'ENOTTY', 'inappropriate ioctl for device' ] ],
    [ -79, [ 'EFTYPE', 'inappropriate file type or format' ] ],
    [ -92, [ 'EILSEQ', 'illegal byte sequence' ] ]
]

exports.os = OS

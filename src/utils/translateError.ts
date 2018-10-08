interface newErr extends Error {
    originErr: Error;
    msg: string;
}

function translateError(msg: string):any {
    const newErr = <newErr>{};
    return (e: Error) => {
        newErr.originErr = e;
        newErr.msg = msg;
        console.log("errors", newErr);
        throw newErr.msg;
    }
}

export default translateError;
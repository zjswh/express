module.exports = {
    data : (data ,code = 200,msg = '')=>{
        let result = {
            code : code,
            msg  : msg,
            data : data
        }
        return result
    }
}
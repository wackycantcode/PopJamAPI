const PopJamAPI = require("./api")
let Output = PopJamAPI.getComments("8bc1a7c0-ed5c-11ea-838b-c76c3607f6c7")
const Stuff = JSON.parse(Output)
// Now we can use our output, but the API is too complicated so let's use catch
try {
    console.log(Stuff)


} catch {
    console.log("wait what")
}
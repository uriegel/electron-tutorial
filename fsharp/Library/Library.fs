namespace Library

type Demo() = 
    member this.Test(param: obj) =
        Async.StartAsTask(async {
            do! Async.Sleep 5000
            return "Das ist schön" + (param :?> string) :> obj
        })
        

import { Observable } from "rxjs"
import { Dispatch, SetStateAction, useEffect } from "react";

const useObservable = (observable: Observable<any>, setter: Dispatch<SetStateAction<any>>) => {
 useEffect(()=>{
let subscription = observable.subscribe(result => {
    setter(result);
});
return ()=> subscription.unsubscribe()
 },[observable, setter])
}

export default useObservable
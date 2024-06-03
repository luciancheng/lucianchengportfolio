import {useState, useEffect} from 'react';

const useFetch = (url) => { // must start with use for custom hook
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => { // get states and may trigger rerenders which will change state, runs when something changes
        fetch(url).then(res => {
            //check if response object is valid
            console.log(res);
            if(!res.ok) { // if the fetch is ok and we got data back
                throw Error('Could not fetch the data for that resource'); // error thrown here will be caught by the catch below
            }
            return res.json(); // also returns another promise, so we need another then statement to return the final values
        }).then(data => {
            setIsPending(false); // usehook loading message when no blogs have been loaded
            setError(null);
        }).catch(err => {
            setError(err.message);
            setIsPending(false);
        }) // catches network error
    }, [url]); // add a dependency array, black array [] only run after first intial render, [name] will only call useeffect when name changes but not anything else
    // ass url to a dependency, when url changes then run the useffect
    return {isPending, error}
}

export default useFetch;
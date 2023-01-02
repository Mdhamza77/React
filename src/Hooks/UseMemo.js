import React , {useState ,useMemo} from 'react';

const UseMemo = () => {
    const [count,setCount] = useState(0);
    const [count2 ,setCount2] = useState(0); 

    const IncrementOne = ()=>{
        setCount(count + 1);
    }
    const IncrementTwo = ()=>{
        setCount2(count2 + 1)
    }

    const isEven = useMemo(() => {
          let i = 0 
          while(i < 200000) i++
          return count % 2 === 0 ;
    },[count])
    return (
        <div> useMemo Hook 
            <button onClick={IncrementOne}>Conuter One - {count} </button>
            <span>{isEven  ? 'Even' : 'odd' }</span> <br/>
            <button onClick={IncrementTwo}>Counter Two - {count2}</button>
        </div>
    );
}

export default UseMemo;

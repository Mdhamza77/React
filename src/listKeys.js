
// Rendering Multiple Components 

// You can build collections of elements and include them in JSX using curly braces {}.


const num = [22,11,22,33,55]

const list = num.map((n) =>
     <li>{n}</li>
);

<ul>{list}</ul>


// Basic List Component  

function Numl(props) {
     const n = props.n
     const lis = n.map((nu)=><li>{nu*2}</li> )  // <li key= {nu.toString()} > {nu} </li>
     return(<ul>{lis}</ul>)
}

const nume = [1,2,4,3]

root.render(<Numl n = {nume}/>)



//Keys

function List(props){
       return <li>{props.value}</li>
}

function Olist(props){
      const numbers = props.numbers
      const l = numbers.map((number)=>   
      <List key= {number.toString()}  value = {number} />
      ) 
      return (
        <ul>{l}</ul>
      )
}

const nArr = [22,88,55,33]
root.render(<Olist numbers={nArr}/>)


// Embeding JSx Expression   


function Lis(props) {
  const a = props.a
   return(
    <ul>{
        a.map((num)=> 
        <List key={num.toString()} value = {num}></List>)
      }  </ul>
   )
}

root.render(<Lis a={nArr}/>)
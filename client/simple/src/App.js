import {useState,useEffect} from "react"


function App() {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(true)
  const [inputField,setInputField] = useState({
    name: "",
    age: ""
  })
  
  useEffect(() => {
    const getData = async () => {
    try {
     const res = await fetch("/api/users")
     const user = await res.json()
     setData(user)
     setLoading(false)
    }
    catch(err) {
     console.log(err)
    }
  }
  getData()
  },[])
   
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {name,value} = e.target;
    setInputField({
      ...inputField,
      [name]:value
    })
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(inputField)
      })
    }
      catch(err) {
        console.log(err)
      }
    }
   
    return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={inputField.name} onChange={handleSubmit}/>
      <input type="number" name="age" value={inputField.age} onChange={handleSubmit} />
      <button type="submit">click me</button>
      </form>
      {loading ? "..loading" : (data && data.user.map((d,index) => {
        return <div key={index}>
          <h1>name:{d.name}</h1>
          <p>age:{d.age}</p>

        </div>
      }))}
    </div>
  );
}

export default App;

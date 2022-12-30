import { useState,useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list){
      return (list = JSON.parse(localStorage.getItem('list')))
    }
    else{
      return []
    }
  }
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEidting] = useState(false);
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show:false, msg:'',type:''})

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){
      showAlert(true,'danger','plase enter value');
    }
    else if(name && isEditing){
      setList(
        list.map((x)=>{
          if(x.id === editId){
            return {...x,title:name}
          }
          return x
        })
      );
      setName('');
      setEditId(null);
      setIsEidting(false);
      showAlert(true,'success','value changed');
    }else{
      showAlert(true,'success','item add to list');
      const newItem = {id : new Date().getTime().toString(),title:name};
      setList([...list,newItem]);
      setName('');
    }
  }

  const showAlert = (show=false,type= '',msg='')=>{
    setAlert({show,type,msg});
  }
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true,'danger','item removed');
    setList(list.filter((x)=>x.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((x)=>x.id === id);
    setIsEidting(true);
    setEditId(id);
    setName(specificItem.title)
  }
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlter={showAlert} list={list}/>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)} />
          <button type="submit" className="submit-btn">{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
      
    </section>
  );
}

export default App;

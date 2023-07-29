import React, { useEffect, useState } from "react";
import B1 from "./happyt.jpg";

const Contact = () => {
  
  const [userData, setUserData] = useState({fname:'', lname:'', email:'', message:''});

  const userContact = async() => {
    try {
      const res = await fetch ("/getdata",{
        method: "GET",
        headers: {
          "Content-type": "application/json"
         },
      });
      const data = res.json();
      console.log(data);
      setUserData({...userData, fname:data.fname, lname:data.lname, email:data.email});

      if(!res.status===200) {
     const error = new Error(res.error);
      throw error;
     }
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    userContact();
  });

  const HandleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
   const value = e.target.value;

    setUserData({ ...userData, [name]:value});
  }
  //sending by clicking button
//   const contactForm = async(e) => {
//     e.preventDefault();

//     const {fname,lname, email, message} = userData;
// const res = await fetch('/contact',{
//   method: "POST",
//         headers: {
//           "Content-type": "application/json"
//          },
//          body: JSON.stringify({
//           fname,lname, email, message
//         })
// })
// const data = await res.json();

// if(!data){
//   console.log('message not sent');
// }else{
//   alert("Message sent");
// }
  //}

    return (
      <>
        <div className="contpage">
          <div className="contsub">
            <div className="contbg">
              <img
                src={B1}
                alt="this is background"
                height="160px"
                width="650px"
              />
              <div className="heading">Contact Us</div>
            </div>
            <form className="contform">
              <label htmlFor="fname" className="contlabel">
                First Name
              </label>
              <br />
              <input type="text" className="continp" 
              name="fname"
              value={userData.fname} 
              onChange={HandleInputs}></input>
              <br />
              <br />
              <label htmlFor="lname" className="contlabel">
                Last Name
              </label>
              <br />
              <input type="text" className="continp" 
               name="lname"
              value={userData.lname} 
              onChange={HandleInputs}></input>
              <br />
              <br />
              <label htmlFor="email" className="contlabel">
                Email
              </label>
              <br />
              <input type="text" className="continp" 
               name="email"
              value={userData.email}
               onChange={HandleInputs}></input>
              <br />
              <br />

              <label htmlFor="message" className="contlabel">
                Write Messege
              </label>
              <br />
              <textarea className="continp" id="continpmsg"
               name="message"
              value={userData.message}
               onChange={HandleInputs}></textarea>
              <br />
              <br />
            </form>
            <br />
            <input type="submit" id="submsg" value="Send" onClick={HandleInputs} />
          </div>
        </div>
      </>
    );
    }
export default Contact;

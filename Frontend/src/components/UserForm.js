// src/components/UserForm.js
import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    // console.log(e.target.name);
    // const x = [...formData];
    // console.log(formData);
    // const doc = {
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // };
    // console.log(doc);

    //direct way of doing 

    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    console.log({
      ...formData,//this syntax basiclly make object of type form data
      [e.target.name]: e.target.value, //this update the particular field 
      //The syntax [e.target.name]: e.target.value is using the computed property name feature in JavaScript. 
      //This feature allows you to dynamically set the property name of an object using an expression inside square brackets.
    });

    var doc = formData;
    // console.log(typeof(e.target.name));
    if(e.target.name === "name")
    {
      // console.log(doc.name);
      doc.name = e.target.value;
      // console.log(doc.name);
    }
    else doc.phonenumber = e.target.value;
    // doc[e.target.name] = e.target.value;
    console.log(doc);
    setFormData({
      name : doc.name,
      phonenumber : doc.phonenumber
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      phonenumber: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

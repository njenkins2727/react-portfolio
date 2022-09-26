import React from 'react';

export default function Contact() {
  return (
  <div class="border border-primary">
    <form>
      <label for="formControlInput" class="form-label my-2">Email address</label>
      <input type="email" class="form-control" id="formControlInput" placeholder="name@example.com"></input>
      
      <label for="formControlInput" class="form-label my-2">Name</label>
      <input type="text" class="form-control" id="formControlInput" placeholder="your name"></input>

      <label for="formControlInput" class="form-label my-2">Message</label>
      <input type="text" class="form-control" id="formControlInput" placeholder="type here"></input>

      <button type="button" class="btn btn-outline-dark my-2">Submit</button>
    </form>
  </div>
       
    
  );
}

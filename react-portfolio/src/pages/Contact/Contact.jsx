import React from 'react';

export default function Contact() {
  return (
    <form>
      <label for="formControlInput" class="form-label my-2">Name</label>
      <input type="text" class="form-control" id="formControlInput" placeholder="your name" required></input>

      <label for="formControlInput" class="form-label my-2">Email address</label>
      <input type="email" class="form-control" id="formControlInput" placeholder="name@example.com" required></input>

      <label for="formControlInput" class="form-label my-2">Message</label>
      <input type="text" class="form-control" id="formControlInput" placeholder="type here"></input>

      <button type="submit" class="btn btn-outline-dark my-2">Submit</button>
    </form>       
  );
}

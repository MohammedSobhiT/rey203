import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../../navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    // Add event listeners for form submissions
    const loginForm = document.getElementById('login-form') as HTMLFormElement;
    const signupForm = document.getElementById(
      'signup-form'
    ) as HTMLFormElement;

    loginForm.addEventListener('submit', this.handleLogin.bind(this));
    signupForm.addEventListener('submit', this.handleSignup.bind(this));
  }

  toggleForm() {
    const loginForm = document.getElementById('login-form') as HTMLElement;
    const signupForm = document.getElementById('signup-form') as HTMLElement;

    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  }

  async handleLogin(event: Event) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const emailInput = target.querySelector('.email') as HTMLInputElement;
    const passwordInput = target.querySelector('.password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password length check
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Call your public API for validation
    const response = await fetch(
      'https://67132eca6c5f5ced66259883.mockapi.io/_Users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const users = await response.json();
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      if (email === 'admin@gmail.com') {
        // If the user is admin, redirect to the dashboard
        this.router.navigate(['/dashboard']);
      } else {
        alert('Login successful!');
        const secondToLastUrl = this.navigationService.getSecondToLastUrl();
        if (secondToLastUrl) {
          this.router.navigateByUrl(secondToLastUrl); // Redirect to the second-to-last visited URL
        } else {
          this.router.navigate(['/landing']); // Fallback to the landing page if no second-to-last URL is found
        }
      }
    } else {
      alert('Invalid email or password');
    }
  }

  async handleSignup(event: Event) {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const emailInput = target.querySelector('.email') as HTMLInputElement;
    const passwordInput = target.querySelector('.password') as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password length check
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Fetch the list of users to check if email is already taken
    const response = await fetch(
      'https://67132eca6c5f5ced66259883.mockapi.io/_Users',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const users = await response.json();
    const emailExists = users.some(
      (user: { email: string }) => user.email === email
    );

    if (emailExists) {
      alert('This email is already taken. Please try another.');
      return;
    }

    // If email is not taken, proceed with the signup process
    const signupResponse = await fetch(
      'https://67132eca6c5f5ced66259883.mockapi.io/_Users',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (signupResponse.ok) {
      alert('Signup successful! Please log in.');
      this.toggleForm(); // Switch to login form
    } else {
      alert('Signup failed. Please try again.');
    }
  }
}

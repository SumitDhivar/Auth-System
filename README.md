# Django User Authentication System

A complete user authentication system built with Django that includes registration, login, and password reset functionality. This system uses HTML, CSS, and JavaScript for the frontend, and Django with PostgreSQL for the backend.

## 📋 Features

- User registration with email verification
- Secure login/logout functionality
- Password reset via email
- User profile page
- Form validation (both frontend and backend)
- Responsive design
- Password strength meter
- Show/hide password toggle
- Auto-dismissing notifications
- PostgreSQL database integration

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Django 5.0+
- **Database**: PostgreSQL
- **Authentication**: Django's built-in authentication system

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SumitDhivar/Auth-System.git
   cd Auth-System
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   Create a `.env` file in the project root and add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   ```

4. **Create the PostgreSQL database**
   ```bash
   # Log into PostgreSQL
   psql -U postgres
   
   # Create the database
   CREATE DATABASE auth_system_db;
   ```

5. **Apply migrations**
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```

8. **Access the application**
   Open your browser and go to http://127.0.0.1:8000/

## 📁 Project Structure

```
auth_system/
├── auth_system/          # Project configuration directory
│   ├── __init__.py
│   ├── settings.py       # Project settings and configurations
│   ├── urls.py           # Project URL configurations
│   └── wsgi.py           # WSGI configuration
├── user_auth/            # Authentication app directory
│   ├── __init__.py
│   ├── admin.py          # Admin configurations
│   ├── apps.py           # App configuration
│   ├── forms.py          # Custom forms
│   ├── models.py         # Data models
│   ├── templates/        # HTML templates
│   ├── urls.py           # App URL configurations
│   └── views.py          # View functions
├── static/               # Static files
│   ├── css/              # CSS files
│   └── js/               # JavaScript files
├── .env                  # Environment variables (not in version control)
├── .gitignore            # Git ignore file
├── manage.py             # Django management script
```

## 🔒 Security Considerations

1. **Email Password Security**
   - Never store email credentials in settings.py or commit them to version control
   - Use environment variables for all sensitive information
   - For Gmail, use App Passwords instead of your account password

2. **Django Secret Key**
   - Store your Django secret key as an environment variable
   - Generate a new secret key for production environments

3. **Database Credentials**
   - Use environment variables for database credentials
   - Set up proper database user permissions in PostgreSQL

4. **Password Reset Security**
   - The system uses Django's built-in password reset functionality
   - Reset tokens are single-use and time-limited
   - Emails contain secure, unique links for password resets

## 🔄 Common Issues and Solutions

1. **Email Authentication Errors**
   - Issue: SMTPAuthenticationError when sending emails
   - Solution: Use App Passwords for Gmail as described above

2. **Database Connection Issues**
   - Issue: Cannot connect to PostgreSQL
   - Solution: Verify database credentials and ensure PostgreSQL service is running

3. **Static Files Not Loading**
   - Issue: CSS/JS not working in production
   - Solution: Run `collectstatic` and check your web server configuration

4. **Registration Form Errors**
   - Issue: Form validation errors not showing
   - Solution: Check form validation in both forms.py and JavaScript

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name - Sumit Dhivar

---

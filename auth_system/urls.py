"""
URL Configuration for auth_system project.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user_auth.urls')),
]

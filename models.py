from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class CustomUserManager(BaseUserManager):
    def create_user(self, ntlogin, password=None, **extra_fields):
        if not ntlogin:
            raise ValueError('The ntlogin field must be set')
        user = self.model(ntlogin=ntlogin, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, ntlogin, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(ntlogin, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    ntlogin = models.CharField(unique=True, max_length=100)
    pass1 = models.CharField(max_length=128)

    objects = CustomUserManager()

    USERNAME_FIELD = 'ntlogin'
    REQUIRED_FIELDS = []  # required when user is created, can add fields like email here
    def set_password(self, raw_password):
        self.pass1 = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.pass1)
    
    def __str__(self):
        return self.ntlogin

from django.urls import path
from . import views

#URL_Config
urlpatterns = [
    path("hello/",views.sayHi)
]
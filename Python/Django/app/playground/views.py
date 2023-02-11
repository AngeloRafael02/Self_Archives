from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# used for request handling

def sayHi(request):
    return HttpResponse('Sup')
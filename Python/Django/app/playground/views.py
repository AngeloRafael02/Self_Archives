from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# used for request handling

def sayHi(request):
    return HttpResponse('Sup')
def renderHi(request):
    return render(request,'hello.html',{'name':'Angelo'}) #remove dictionary parameter to change  template
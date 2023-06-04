import tkinter as tk

root = tk.Tk()
root.geometry("800x500")
root.title("myFirstTKinterApp")
#root.attributes('-fullscreen',True)

    #LABEL
label = tk.Label(root,text="Hello World",font=('Arial',20))
label.pack(padx=20,pady=20) # arguments are paddings

    #TEXTBOX
textBox = tk.Text(root,height=1,font=('Arial',16))
textBox.pack(padx=20,pady=20)

    #Entry 
myEntry = tk.Entry(root)
myEntry.pack()


root.mainloop() # Basic Way to Create a window
 document.getElementById('orderForm').addEventListener('submit', function(event) {
   event.preventDefault();
  
    const name = document.getElementById('name').value;
   const phone = document.getElementById('phone').value;
   const order = document.getElementById('order').value;
  
     console.log("طلب جديد:");
     console.log("الاسم:", name);
     console.log("رقم الموبايل:", phone);
    console.log("الطلب:", order);

   const msg = `مرحبا   انا ${name}\nرقمي: ${phone}\nعايز/ة أطلب: ${order}`;


 window.open(`https://wa.me/201001876075?text=${encodeURIComponent(msg)}`, '_blank');


  
   document.getElementById('confirmation').classList.remove('hidden');
    this.reset();
  });



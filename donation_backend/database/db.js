const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://dawa:dawa@cluster0.ryydz.mongodb.net/donation?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then((data)=>{
    console.log(`mongodb is connected at:${data.connection.host}`)
})
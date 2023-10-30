// Normal message, within the limits 200
const message1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem, porro libero voluptate eius doloribus facere aperiam eveniet tempore ut asperiores dolore quis neque corporis nihil!.";
const message2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem, porro libero voluptate eius doloribus facere aperiam eveniet tempore ut asperiores dolore quis neque corporis nihil! Delectus deleniti tenetur explicabo.";
const message3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem, porro libero voluptate eius doloribus facere aperiam eveniet tempore ut asperiores dolore quis neque corporis nihil! Del.";

console.log( message1.length );
console.log( message2.length );
console.log( message3.length );

// Challenge: create a variable that will hold the character limit (200). Check each message and supply the following responses
// given the message length:
// 1) If the message length is less than the limit, console.log "Message within the limit. Looks good!"
// 2) If the message length is equal to the limit, console.log "Message within the limit. Looks good!"
// 3) If the message length exceeds the limit, console.log "Message is longer than the limit. Please remove at least X characters."
// Replace X with the number of characters that exceed the limit, e.g. if the message is 240, X will be 40.
export default async function ({ addon, global, console }) {
  const div = document.querySelector('box-header');
  const link = document.createElement('a');
 
                // Create the text node for anchor element. 
                const link = document.createTextNode("This is link"); 
                  
                // Append the text node to anchor element. 
                link.appendChild(link);  
                  
                // Set the title. 
                link.title = "This is Link";  
                  
                // Set the href property. 
                link.href = "https://scratch.mit.edu/messages/ajax/friends-activity/";  
                  
                // Append the anchor element to the body. 
                document.body.appendChild(link);
}

// const hello = () => {
//     console.log("hello-world");
// };

// hello();

  
// Initialize content variables
let homeContent = "";
let projectContent = "";

// Read home.html
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;

  

  // After reading home.html, read project.html
  fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    projectContent = project;

    // Create the server after both files are read
    http
      .createServer((request, response) => {
        let url = request.url;
        response.writeHeader(200, { "Content-Type": "text/html" });

        switch (url) {
          case "/project":
            response.write(projectContent);
            break;
          default:
            response.write(homeContent);
            break;
        }
        response.end();
      })
      .listen(3000, () => {
        console.log("Server is listening on port 3000");
      });
  });
});

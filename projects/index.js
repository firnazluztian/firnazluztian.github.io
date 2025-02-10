const ProjectData = [
    {
        id: 1,
        bgcolor: "lightgrey",
        projectID: "yogaz",
        title: "Yogaz",
        imgsrc: "",
        description: "a web app aplication using python flask",
        tech: "HTML, CSS"
    },
    {
        id: 2,
        bgcolor: "",
        projectID: "stormy",
        title: "Stormy",
        imgsrc: "",
        description: "a web app aplication using python flask",
        tech: "HTML, CSS, Javascript"
    }
]

function Header (props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            src="http://www.decisionanalysis.net/wp-content/uploads/2015/08/icon-page-project-management.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            style={{marginRight: 1 + 'em'}}
          />
          Firnaz Luztian
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="https://firnazluztian.github.io/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROJECT LISTS
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#yogaz">Action</a>
                <a class="dropdown-item" href="#stormy">Another action</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function Footer (props) {
  return (
    <footer>
      <p>
        Copyright 2019 | Firnaz Luztian |
        {' '}
        <a href="https://firnazluztian.github.io/">Firnazluztian.github.io</a>
      </p>
    </footer>
  );
}

function ProjectList(props) {
    return (
        <section className="container-fluid"
        style={{backgroundColor: props.bgcolor}}>
            <div className="container">
                <h1 id={props.projectID}>{props.title}</h1>
                <img src={props.imgsrc} />
                <p>Description: <br/>{props.description}</p>
                <p>Technology used: {props.tech}</p>
                <hr/>
            </div>
        </section>
        
    )
}

function Projects(props) {
    const projectComponents = ProjectData.map(project => 
        <ProjectList 
        key={project.id} 
        bgcolor={project.bgcolor}
        projectID={project.projectID}
        title={project.title}
        imgsrc={project.imgsrc}
        description={project.description}
        tech={project.tech} 
        />
    )
    
    return(
        <div className="boxShadow">
            {projectComponents}
        </div>
    )
}

function App (props) {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

ReactDOM.render (<App />, document.getElementById ('root'));

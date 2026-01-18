# 🐳 Docker Containerization Projects

A hands-on collection of Docker projects demonstrating progressive learning from basic containerization to advanced development workflows with bind mounts.

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

---

## 📚 Overview


This repository showcases practical Docker implementations across 4 progressive projects, each building on concepts from the previous one. From basic containerization to advanced bind mounts with two-way file synchronization.

**Key Learning:** Development workflows with Docker, multi-language containerization, Git integration, and production-ready configurations.

---

## 🎯 Projects

### 1️⃣ Basic Node Server
**Concept:** Introduction to Docker containerization

Simple Express.js server containerized with Docker. Demonstrates fundamental Dockerfile structure, COPY commands, and port mapping.
```bash
cd basic_node_server
docker build -t basic-node-server .
docker run -p 3000:3000 basic-node-server
```

**Endpoint:** `GET /home` → `{"message":"OK"}`

**Key Learning:** Dockerfile basics, WORKDIR, RUN vs CMD, npm ci

---

### 2️⃣ App from GitHub
**Concept:** Git integration in Docker

Clones a GitHub repository during Docker build, demonstrating how to integrate version control with containerization. Includes environment variable configuration.
```bash
cd app_from_github
docker build -t app-from-github .
docker run -p 3001:3000 app-from-github
```

**Highlights:**
- Installs Git inside container
- Clones repo during build
- ENV configuration
- Flexible port mapping

**Key Learning:** Installing system packages, Git in Docker, ENV variables, EXPOSE directive

---

### 3️⃣ Python Flask Server
**Concept:** Multi-language Docker support

Flask application demonstrating Docker's language-agnostic nature. Shows that Docker works seamlessly across different tech stacks.
```bash
cd python_project
docker build -t flask-server .
docker run -p 3005:3005 flask-server
```

**Endpoint:** `GET /home` → `"hello"`

**Key Learning:** Python containerization, pip install, host binding (0.0.0.0), cross-language consistency

---

### 4️⃣ Node Bind Mount ⭐
**Concept:** Two-way file synchronization for development

Advanced development environment with **bind mounts** - the game-changer for Docker development workflows. Changes in local files instantly reflect in container and vice versa.
```bash
cd node_bind_mount
docker build -t node-bind-mount .

# Magic: Two-way sync!
docker run -it --init -p 3002:3000 -v "$(pwd)":/app node-bind-mount
```

**API Endpoints:**
- `GET /home` → `{"message":"Homecoming"}`
- `GET /health` → `{"status":"healthy"}`
- `GET /info` → `{"message":"info"}`
- `GET /about` → `{"message":"about"}`

**The Magic:**
- Edit `index.js` locally → Changes appear in container instantly
- Edit `index.js` in container → Changes appear locally instantly
- **No rebuild needed!**

**Key Learning:** Bind mounts with `-v`, development workflows, dotenv configuration, hot reload support

---

## 🎓 What I Learned

### Core Docker Concepts
- ✅ Dockerfile structure (FROM, WORKDIR, COPY, RUN, CMD)
- ✅ Image building and container management
- ✅ Port mapping (`-p host:container`)
- ✅ Multi-language containerization
- ✅ Environment variables and configuration

### Advanced Concepts
- ✅ **Bind mounts** for two-way file sync
- ✅ Git integration in Docker
- ✅ Development vs production workflows
- ✅ Signal handling with `--init`
- ✅ Health check patterns

### Real-World Skills
- ✅ Debugging container issues
- ✅ Optimizing Docker images
- ✅ Setting up development environments
- ✅ Cross-platform compatibility

---

## ⚡ Quick Start

### Prerequisites
- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Node.js 18+ (for local testing)
- Python 3+ (for local testing)

### Run All Projects
```bash
# Clone repository
git clone https://github.com/narayannikhil/containers.git
cd docker-projects

# Project 1
cd basic_node_server && docker build -t basic-node . && docker run -p 3000:3000 basic-node

# Project 2
cd ../app_from_github && docker build -t app-github . && docker run -p 3001:3000 app-github

# Project 3
cd ../python_project && docker build -t flask-app . && docker run -p 3005:3005 flask-app

# Project 4 (Recommended: Bind mount mode)
cd ../node_bind_mount && docker build -t node-bind . && docker run -it --init -p 3002:3000 -v "$(pwd)":/app node-bind
```

---

## 🔧 Docker Commands Reference
```bash
# Building
docker build -t <image-name> .                    # Build image
docker build -t <name>:tag .                      # Build with tag

# Running
docker run <image>                                 # Basic run
docker run -p 3000:3000 <image>                   # With port mapping
docker run -v $(pwd):/app <image>                 # With bind mount
docker run -it --init <image>                     # Interactive with init
docker run -d <image>                             # Detached mode

# Management
docker ps                                          # List running containers
docker ps -a                                       # List all containers
docker stop <container-id>                        # Stop container
docker rm <container-id>                          # Remove container
docker exec -it <container-id> sh                # Enter container shell
docker logs <container-id>                        # View logs
docker images                                      # List images
docker rmi <image-id>                             # Remove image
```

---

## 📁 Project Structure
```
docker-projects/
├── basic_node_server/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── app_from_github/
│   └── Dockerfile
│
├── python_project/
│   ├── Dockerfile
│   └── app.py
│
└── node_bind_mount/
    ├── Dockerfile
    ├── package.json
    ├── index.js
    ├── .env
    ├── .dockerignore
    └── .gitignore
```

---

## 💡 Key Insights

### Why Bind Mounts Are Revolutionary

**Traditional Docker Development:**
```
Edit code → Stop container → Rebuild image → Start container → Test
⏱️ 5-10 minutes per iteration
```

**With Bind Mounts:**
```
Edit code → Test immediately
⏱️ Instant feedback
```

This **two-way pipeline** transforms Docker from a deployment tool into a powerful development environment.

### Discovery Moment

While working on Project 4, I discovered that bind mounts work **both ways**:
1. Local changes → Container ✅
2. Container changes → Local ✅

This means you can edit files from inside the container (via `docker exec`) and see changes reflected on your host machine immediately.

---

## 🚀 Future Enhancements

- [ ] Add Docker Compose for multi-container orchestration
- [ ] Implement multi-stage production Dockerfiles
- [ ] Add PostgreSQL database integration
- [ ] Create CI/CD pipeline with GitHub Actions
- [ ] Add health checks and monitoring
- [ ] Deploy to AWS EC2
- [ ] Add Nginx reverse proxy
- [ ] Implement logging and metrics

---

## 🐛 Troubleshooting

### Container exits immediately
```bash
docker logs <container-id>           # Check what went wrong
docker run -it <image> sh            # Run interactively
```

### Port already in use
```bash
lsof -i :3000                        # Find process using port
kill -9 <PID>                        # Kill that process
docker run -p 3001:3000 <image>     # Or use different port
```

### Bind mount not working
```bash
pwd                                  # Verify you're in project directory
docker run -v "$(pwd)":/app <image> # Use absolute path
docker exec -it <id> ls /app        # Check mounted files
```

### Changes not reflecting (bind mount)
```bash
# Ensure nodemon is running for hot reload
docker run -v "$(pwd)":/app <image> npm run dev

# Exclude node_modules from sync
docker run -v "$(pwd)":/app -v /app/node_modules <image>
```

---

## 📚 Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Node.js Docker Guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🎯 Skills Demonstrated

**Docker Fundamentals:**
- Dockerfile creation and optimization
- Image building and management
- Container lifecycle management
- Port mapping and networking
- Volume management (bind mounts)

**DevOps Practices:**
- Environment configuration (ENV, .env)
- Multi-language containerization
- Development vs production workflows
- Git integration
- Health monitoring patterns

**Development Workflows:**
- Hot reload development environments
- Two-way file synchronization
- Container debugging and troubleshooting
- Cross-platform compatibility

---

## 👤 Author

**Nikhil Narayan**

- GitHub: [@narayannikhil](https://github.com/narayannikhil)
- LinkedIn: [https://www.linkedin.com/in/nikhil-pareek-7b80309a/]
- Email: nikhilpareeknp@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Acknowledgments

Built as part of hands-on Docker learning journey, progressing from basic concepts to advanced development workflows with bind mounts.

Special thanks to the Docker community for excellent documentation and resources.

---

**💡 Key Takeaway:** Docker isn't just for deployment - it's a powerful development tool. Bind mounts enable instant feedback loops that make development faster and more efficient.

---

<div align="center">

**If you found this helpful, please give it a ⭐**

Made with ❤️ and lots of Docker experimentation

</div>
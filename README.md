# Pokhara Tourism App — CI/CD Setup

## How it works

```
push to dev  ──►  CI runs (npm build + docker build + container test)
                       │
             create PR: dev → main
                       │
             merge PR  ──►  CD runs (SSH into EC2 → git pull → docker build → restart)
```

---

## Step 1 — Install Docker on EC2 (run this once)

SSH into your EC2 and run:

**Amazon Linux:**
```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user
newgrp docker
```

**Ubuntu:**
```bash
sudo apt update && sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu
newgrp docker
```

---

## Step 2 — Add GitHub Secrets

Go to: **Repo → Settings → Secrets and variables → Actions → New repository secret**

| Secret Name   | Value                                           |
|---------------|-------------------------------------------------|
| `EC2_HOST`    | Your EC2 public IP or DNS                       |
| `EC2_USER`    | `ec2-user` (Amazon Linux) or `ubuntu` (Ubuntu)  |
| `EC2_SSH_KEY` | Full contents of your `.pem` key file           |

```bash
# To get your pem key contents:
cat your-key.pem
# Copy EVERYTHING including the BEGIN/END lines
```

---

## Step 3 — EC2 Security Group Ports

| Port | Reason |
|------|--------|
| 22   | SSH — GitHub Actions needs this to connect |
| 80   | HTTP — your app is served here |

---

## Step 4 — Push and go

```bash
git checkout -b dev
git add .
git commit -m "setup cicd"
git push origin dev
# CI runs automatically

# When ready: create PR on GitHub (dev → main), merge it
# CD deploys automatically to EC2
```

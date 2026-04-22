#!/bin/bash

set -e

echo "======================================"
echo "🚀 Kubernetes Deployment Script START"
echo "======================================"

# =========================
# 1. Check kubectl
# =========================
echo "🔍 Checking kubectl..."
kubectl version --client

# =========================
# 2. Fix Minikube (Jenkins cache issue)
# =========================
echo "🧹 Checking Minikube environment..."

if [ -d "/var/lib/jenkins/.minikube" ]; then
    echo "⚠️ Jenkins Minikube cache detected. Cleaning..."
    sudo rm -rf /var/lib/jenkins/.minikube
    echo "✅ Cache cleared"
fi

# =========================
# 3. Start Minikube safely
# =========================
echo "🚀 Starting Minikube..."

minikube start --cpus=2 --memory=4096 || {
    echo "❌ Minikube failed to start"
    echo "👉 Trying clean restart..."
    minikube delete
    minikube start --cpus=2 --memory=4096
}

# =========================
# 4. Apply Kubernetes configs
# =========================
echo "📦 Applying ConfigMap..."
kubectl apply -f configmap.yaml

echo "🚀 Applying Deployment..."
kubectl apply -f deployment.yaml

echo "🌐 Applying Service..."
kubectl apply -f service.yaml

# =========================
# 5. Wait for rollout
# =========================
echo "⏳ Waiting for deployment to be ready..."
kubectl rollout status deployment/myapp-deployment

# =========================
# 6. Show status
# =========================
echo "📋 Pods:"
kubectl get pods -o wide

echo "🌐 Services:"
kubectl get svc

# =========================
# 7. Open app
# =========================
echo "🔥 Opening application..."
minikube service myapp-service --url

echo "======================================"
echo "✅ Deployment Completed Successfully"
echo "======================================"

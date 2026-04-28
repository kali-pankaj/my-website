#!/bin/bash
set -e

echo "Cluster information Check"
kubectl get nodes

echo "Deploy Application..."
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

echo "Waiting for pods to be ready..."
sleep 10

echo "pods are Information check "
kubectl get pods

echo "Click url your application live or not"
minikube service my-webapp --url

echo "all process complete successful..."
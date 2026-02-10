const ctx = document.getElementById("tempChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["10:00","10:10","10:20","10:30","10:40","10:50"],
    datasets: [{
      label: "Temperature (°C)",
      data: [62,64,65,66,68,70],
      borderColor: "#0f4c75",
      tension: 0.3
    }]
  },
  options: {
    responsive: true
  }
});

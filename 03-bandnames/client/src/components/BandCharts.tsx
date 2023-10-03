import { Chart, ChartItem, registerables } from "chart.js";
import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";

const BandCharts = () => {
  Chart.register(...registerables);

  const { socket } = useSocketContext();

  useEffect(() => {
    let chart: Chart;

    const createGraph = (bands: Band[]) => {
      const ctx = document.getElementById("myChart");

      if (chart) chart.destroy();

      return new Chart(ctx as ChartItem, {
        type: "bar",
        data: {
          labels: bands.map((band) => band.name),
          datasets: [
            {
              label: "# of Votes",
              data: bands.map((band) => band.votes),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          animation: false,
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    socket.on("current-bands", (bands: Band[]) => {
      chart = createGraph(bands);
    });

    return () => {
      socket.off("current-bands");
    };
  }, [socket]);

  return <canvas id="myChart"></canvas>;
};

export default BandCharts;

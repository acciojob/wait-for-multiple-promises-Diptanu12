  const output = document.getElementById("output");
      const loadingRow = document.getElementById("loading");

      function createPromise(promiseName) {
        const time = (Math.random() * 2 + 1).toFixed(3); 
        return new Promise((resolve) => {
          setTimeout(() => resolve({ promiseName, time: parseFloat(time) }), time * 1000);
        });
      }

      const promises = [
        createPromise("Promise 1"),
        createPromise("Promise 2"),
        createPromise("Promise 3"),
      ];

      const startTime = performance.now();

      Promise.all(promises).then((results) => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);

        loadingRow.style.display = "none";

        output.innerHTML = "";

        results.forEach((result) => {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${result.promiseName}</td><td>${result.time}</td>`;
          output.appendChild(row);
        });

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
        output.appendChild(totalRow);
      });
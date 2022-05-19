// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var idSample = data.samples
    // Create a variable that filters the samples for the object with the desired sample number.
    var selectedIdSamples = idSample.filter(data => data.id == sample);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var selectedMeta = idSample.filter(data => data.metadata == sample);
    console.log(selectedMeta);
    // Create a variable that holds the first sample in the array.
    var firstSample2 = selectedMeta[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstMeta = firstSample2.metadata;

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuMeta = firstSample2.otu_ids;
    var labelsMeta = firstSample2.out_labels;
    var sampleMeta = firstSample2.sample_values;

    // 3. Create a variable that holds the washing frequency.
    var wfreq = firstSample2.wfreq;
    
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot();
  });
}

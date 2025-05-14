// timetool

function timetool() {
	document.getElementById("timetool").innerHTML =	
		'<h2>Clock</h2>' +
		'<h3 id="clock">00:00:00.00</h3>' +
	
		'<h2>Stopwatch</h2>' +
		'<button id="startStopwatchButton">Start</button>' +
		'<button id="stopStopwatchButton">Stop</button>' +
		'<button id="resetStopwatchButton">Reset</button>' +
		'<h3 id="stopwatch">00:00:00.00</h3>' +

		'<h2>Timer for a Specific Time</h2>' +
		'<!-- <input type="text" id="specificTimeInput" placeholder="Enter time (HH:MM:SS)"> -->' +
		'<select id="getHourSpecific">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
		'</select> : ' +
		'<select id="getMinuteSpecific">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
			'<option value="24">24</option>' +
			'<option value="25">25</option>' +
			'<option value="26">26</option>' +
			'<option value="27">27</option>' +
			'<option value="28">28</option>' +
			'<option value="29">29</option>' +
			'<option value="30">30</option>' +
			'<option value="31">31</option>' +
			'<option value="32">32</option>' +
			'<option value="33">33</option>' +
			'<option value="34">34</option>' +
			'<option value="35">35</option>' +
			'<option value="36">36</option>' +
			'<option value="37">37</option>' +
			'<option value="38">38</option>' +
			'<option value="39">39</option>' +
			'<option value="40">40</option>' +
			'<option value="41">41</option>' +
			'<option value="42">42</option>' +
			'<option value="43">43</option>' +
			'<option value="44">44</option>' +
			'<option value="45">45</option>' +
			'<option value="46">46</option>' +
			'<option value="47">47</option>' +
			'<option value="48">48</option>' +
			'<option value="49">49</option>' +
			'<option value="50">50</option>' +
			'<option value="51">51</option>' +
			'<option value="52">52</option>' +
			'<option value="53">53</option>' +
			'<option value="54">54</option>' +
			'<option value="55">55</option>' +
			'<option value="56">56</option>' +
			'<option value="57">57</option>' +
			'<option value="58">58</option>' +
			'<option value="59">59</option>' +
		'</select> : ' +
		'<select id="getSecondSpecific">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
			'<option value="24">24</option>' +
			'<option value="25">25</option>' +
			'<option value="26">26</option>' +
			'<option value="27">27</option>' +
			'<option value="28">28</option>' +
			'<option value="29">29</option>' +
			'<option value="30">30</option>' +
			'<option value="31">31</option>' +
			'<option value="32">32</option>' +
			'<option value="33">33</option>' +
			'<option value="34">34</option>' +
			'<option value="35">35</option>' +
			'<option value="36">36</option>' +
			'<option value="37">37</option>' +
			'<option value="38">38</option>' +
			'<option value="39">39</option>' +
			'<option value="40">40</option>' +
			'<option value="41">41</option>' +
			'<option value="42">42</option>' +
			'<option value="43">43</option>' +
			'<option value="44">44</option>' +
			'<option value="45">45</option>' +
			'<option value="46">46</option>' +
			'<option value="47">47</option>' +
			'<option value="48">48</option>' +
			'<option value="49">49</option>' +
			'<option value="50">50</option>' +
			'<option value="51">51</option>' +
			'<option value="52">52</option>' +
			'<option value="53">53</option>' +
			'<option value="54">54</option>' +
			'<option value="55">55</option>' +
			'<option value="56">56</option>' +
			'<option value="57">57</option>' +
			'<option value="58">58</option>' +
			'<option value="59">59</option>' +
		'</select>' +
		'<button id="startSpecificTimeButton">Start</button>' +
		'<button id="stopSpecificTimeButton">Stop</button>' +
		'<button id="resetSpecificTimeButton">Reset</button>' +
		'<h3 id="specificTime">00:00:00.00</h3>' +

		'<h2>Timer for a Duration</h2>' +
		'<!-- <input type="text" id="durationInput" placeholder="Enter duration (HH:MM:SS)"> -->' +
		'<select id="getHourDuration">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
		'</select> : ' +
		'<select id="getMinuteDuration">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
			'<option value="24">24</option>' +
			'<option value="25">25</option>' +
			'<option value="26">26</option>' +
			'<option value="27">27</option>' +
			'<option value="28">28</option>' +
			'<option value="29">29</option>' +
			'<option value="30">30</option>' +
			'<option value="31">31</option>' +
			'<option value="32">32</option>' +
			'<option value="33">33</option>' +
			'<option value="34">34</option>' +
			'<option value="35">35</option>' +
			'<option value="36">36</option>' +
			'<option value="37">37</option>' +
			'<option value="38">38</option>' +
			'<option value="39">39</option>' +
			'<option value="40">40</option>' +
			'<option value="41">41</option>' +
			'<option value="42">42</option>' +
			'<option value="43">43</option>' +
			'<option value="44">44</option>' +
			'<option value="45">45</option>' +
			'<option value="46">46</option>' +
			'<option value="47">47</option>' +
			'<option value="48">48</option>' +
			'<option value="49">49</option>' +
			'<option value="50">50</option>' +
			'<option value="51">51</option>' +
			'<option value="52">52</option>' +
			'<option value="53">53</option>' +
			'<option value="54">54</option>' +
			'<option value="55">55</option>' +
			'<option value="56">56</option>' +
			'<option value="57">57</option>' +
			'<option value="58">58</option>' +
			'<option value="59">59</option>' +
		'</select> : ' +
		'<select id="getSecondDuration">' +
			'<option value="00">00</option>' +
			'<option value="01">01</option>' +
			'<option value="02">02</option>' +
			'<option value="03">03</option>' +
			'<option value="04">04</option>' +
			'<option value="05">05</option>' +
			'<option value="06">06</option>' +
			'<option value="07">07</option>' +
			'<option value="08">08</option>' +
			'<option value="09">09</option>' +
			'<option value="10">10</option>' +
			'<option value="11">11</option>' +
			'<option value="12">12</option>' +
			'<option value="13">13</option>' +
			'<option value="14">14</option>' +
			'<option value="15">15</option>' +
			'<option value="16">16</option>' +
			'<option value="17">17</option>' +
			'<option value="18">18</option>' +
			'<option value="19">19</option>' +
			'<option value="20">20</option>' +
			'<option value="21">21</option>' +
			'<option value="22">22</option>' +
			'<option value="23">23</option>' +
			'<option value="24">24</option>' +
			'<option value="25">25</option>' +
			'<option value="26">26</option>' +
			'<option value="27">27</option>' +
			'<option value="28">28</option>' +
			'<option value="29">29</option>' +
			'<option value="30">30</option>' +
			'<option value="31">31</option>' +
			'<option value="32">32</option>' +
			'<option value="33">33</option>' +
			'<option value="34">34</option>' +
			'<option value="35">35</option>' +
			'<option value="36">36</option>' +
			'<option value="37">37</option>' +
			'<option value="38">38</option>' +
			'<option value="39">39</option>' +
			'<option value="40">40</option>' +
			'<option value="41">41</option>' +
			'<option value="42">42</option>' +
			'<option value="43">43</option>' +
			'<option value="44">44</option>' +
			'<option value="45">45</option>' +
			'<option value="46">46</option>' +
			'<option value="47">47</option>' +
			'<option value="48">48</option>' +
			'<option value="49">49</option>' +
			'<option value="50">50</option>' +
			'<option value="51">51</option>' +
			'<option value="52">52</option>' +
			'<option value="53">53</option>' +
			'<option value="54">54</option>' +
			'<option value="55">55</option>' +
			'<option value="56">56</option>' +
			'<option value="57">57</option>' +
			'<option value="58">58</option>' +
			'<option value="59">59</option>' +
		'</select>' +
		'<button id="startDurationButton">Start</button>' +
		'<button id="stopDurationButton">Stop</button>' +
		'<button id="resetDurationButton">Reset</button>' +
		'<h3 id="duration">00:00:00.00</h3>';

	ttRun();
}

function ttRun() {
	// Clock Formatting
	function pad(num, size) {
		return num.toString().padStart(size, '0');
	}

	// Clock Logic
	function updateClock() {
		const now = new Date();
		const hours = pad(now.getHours(), 2);
		const minutes = pad(now.getMinutes(), 2);
		const seconds = pad(now.getSeconds(), 2);
		const hundredths = pad(Math.floor(now.getMilliseconds() / 10), 2);
	
		const timeString = `${hours}:${minutes}:${seconds}.${hundredths}`;
		document.getElementById('clock').textContent = timeString;
	}

	// Clock Handler
	setInterval(updateClock, 10);

	// Stopwatch Variables
    let stopwatchStartTime;
    let stopwatchElapsedTime = 0;
    let stopwatchInterval;

    // Timer for Specific Time Variables
    let specificTimeTarget;
    let specificTimeInterval;

    // Timer for Duration Variables
	let duration = 0;
    let durationStartTime;
    let durationInterval;

    // Stopwatch Elements
    const stopwatchElement = document.getElementById('stopwatch');
    const startStopwatchButton = document.getElementById('startStopwatchButton');
    const stopStopwatchButton = document.getElementById('stopStopwatchButton');
    const resetStopwatchButton = document.getElementById('resetStopwatchButton');

    // Timer for Specific Time Elements
    const specificTimeElement = document.getElementById('specificTime');
    const startSpecificTimeButton = document.getElementById('startSpecificTimeButton');
    const stopSpecificTimeButton = document.getElementById('stopSpecificTimeButton');
    const resetSpecificTimeButton = document.getElementById('resetSpecificTimeButton');

    // Timer for Duration Elements
    const durationElement = document.getElementById('duration');
    const startDurationButton = document.getElementById('startDurationButton');
    const stopDurationButton = document.getElementById('stopDurationButton');
    const resetDurationButton = document.getElementById('resetDurationButton');

    // Event listeners for Stopwatch
    startStopwatchButton.addEventListener('click', startStopwatch);
    stopStopwatchButton.addEventListener('click', stopStopwatch);
    resetStopwatchButton.addEventListener('click', resetStopwatch);

    // Event listeners for Timer for Specific Time
    startSpecificTimeButton.addEventListener('click', startSpecificTime);
    stopSpecificTimeButton.addEventListener('click', stopSpecificTime);
    resetSpecificTimeButton.addEventListener('click', resetSpecificTime);

    // Event listeners for Timer for Duration
    startDurationButton.addEventListener('click', startDuration);
    stopDurationButton.addEventListener('click', stopDuration);
    resetDurationButton.addEventListener('click', resetDuration);

    // Start Stopwatch
    function startStopwatch() {
      stopwatchStartTime = Date.now() - stopwatchElapsedTime;
      stopwatchInterval = setInterval(updateStopwatch, 10);
      toggleStopwatchButtons(true);
    }

    // Stop Stopwatch
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      toggleStopwatchButtons(false);
    }

    // Reset Stopwatch
    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchElement.textContent = '00:00:00.00';
	  stopwatchElapsedTime = 0;
      toggleStopwatchButtons(false);
    }
	
    // Update Stopwatch Display
    function updateStopwatch() {
      const currentTime = Date.now();
      stopwatchElapsedTime = currentTime - stopwatchStartTime;

      const milliseconds = Math.floor((stopwatchElapsedTime % 1000) / 10);
      const seconds = Math.floor((stopwatchElapsedTime / 1000) % 60);
      const minutes = Math.floor((stopwatchElapsedTime / 60000) % 60);
      const hours = Math.floor(stopwatchElapsedTime / 3600000);

      const displayMilliseconds = milliseconds.toString().padStart(2, '0');
      const displaySeconds = seconds.toString().padStart(2, '0');
      const displayMinutes = minutes.toString().padStart(2, '0');
      const displayHours = hours.toString().padStart(2, '0');

      stopwatchElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;
    }

    // Toggle Stopwatch Button States
    function toggleStopwatchButtons(isRunning) {
      startStopwatchButton.disabled = isRunning;
      stopStopwatchButton.disabled = !isRunning;
    }

    // Start Timer for Specific Time
    function startSpecificTime() {
      const getHourSpecific = document.getElementById('getHourSpecific').value;
	  const getMinuteSpecific = document.getElementById('getMinuteSpecific').value;
	  const getSecondSpecific = document.getElementById('getSecondSpecific').value;
      // const inputTime = specificTimeInput.value.trim();
	  const inputTime = [getHourSpecific, getMinuteSpecific, getSecondSpecific].join(':');
      if (validateTime(inputTime)) {
        const [hours, minutes, seconds] = inputTime.split(':').map(Number);
        const currentTime = new Date();
        const targetTime = new Date(
          currentTime.getFullYear(),
          currentTime.getMonth(),
          currentTime.getDate(),
          hours,
          minutes,
          seconds
        );

        if (targetTime <= currentTime) {
		  specificTimeTarget = 86400000 + targetTime.getTime();
          specificTimeInterval = setInterval(updateSpecificTime, 10);
          toggleSpecificTimeButtons(true);

        } else if (targetTime > currentTime)  {
          specificTimeTarget = targetTime.getTime();
          specificTimeInterval = setInterval(updateSpecificTime, 10);
          toggleSpecificTimeButtons(true);
		}
      } else {
        alert('Please enter a time HH:MM:SS');
      }
    }

    // Stop Timer for Specific Time
    function stopSpecificTime() {
      clearInterval(specificTimeInterval);
      toggleSpecificTimeButtons(false);
    }

    // Reset Timer for Specific Time
    function resetSpecificTime() {
      clearInterval(specificTimeInterval);
	  inputTime = '';
	  
      //specificTimeInput.value = '';
      specificTimeElement.textContent = '00:00:00.00';
	  document.getElementById('getHourSpecific').value = '00';
	  document.getElementById('getMinuteSpecific').value = '00';
	  document.getElementById('getSecondSpecific').value = '00';
      toggleSpecificTimeButtons(false);
    }

    // Update Timer for Specific Time Display
    function updateSpecificTime() {
      const currentTime = Date.now();
      const timeRemaining = specificTimeTarget - currentTime;

      if (timeRemaining <= 0) {
        clearInterval(specificTimeInterval);
        specificTimeElement.textContent = '00:00:00.00';
        toggleSpecificTimeButtons(false);
        alert('Specific time has been reached!');
        return;
      }

      const milliseconds = Math.floor((timeRemaining % 1000) / 10);
      const seconds = Math.floor((timeRemaining / 1000) % 60);
      const minutes = Math.floor((timeRemaining / 60000) % 60);
      const hours = Math.floor(timeRemaining / 3600000);

      const displayMilliseconds = milliseconds.toString().padStart(2, '0');
      const displaySeconds = seconds.toString().padStart(2, '0');
      const displayMinutes = minutes.toString().padStart(2, '0');
      const displayHours = hours.toString().padStart(2, '0');

      specificTimeElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;
    }

    // Toggle Timer for Specific Time Button States
    function toggleSpecificTimeButtons(isRunning) {
      startSpecificTimeButton.disabled = isRunning;
      stopSpecificTimeButton.disabled = !isRunning;
    }

    // Start Timer for Duration
    function startDuration() {
	  const getHourDuration = document.getElementById('getHourDuration').value;
	  const getMinuteDuration = document.getElementById('getMinuteDuration').value;
	  const getSecondDuration = document.getElementById('getSecondDuration').value;
      // const inputDuration = durationInput.value.trim();
	  const inputDuration = [getHourDuration, getMinuteDuration, getSecondDuration].join(':');
      if (validateTime(inputDuration)) {
        const [hours, minutes, seconds] = inputDuration.split(':').map(Number);
        duration = (hours * 3600 + minutes * 60 + seconds) * 1000;
        durationStartTime = Date.now();
        durationElapsedTime = 0;
        durationInterval = setInterval(updateDuration, 10);
        toggleDurationButtons(true);
      } else {
        alert('Please enter a time HH:MM:SS');
      }
    }

    // Stop Timer for Duration
    function stopDuration() {
	  durationElement.textContent = '00:00:00.00';
      clearInterval(durationInterval);
      toggleDurationButtons(false);
    }

    // Reset Timer for Duration
    function resetDuration() {
      clearInterval(durationInterval);
	  document.getElementById('getHourDuration').value = '00';
	  document.getElementById('getMinuteDuration').value = '00';
	  document.getElementById('getSecondDuration').value = '00';
      durationElement.textContent = '00:00:00.00';
      toggleDurationButtons(false);
    }

    // Update Timer for Duration Display
    function updateDuration() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - durationStartTime;
	  const remainingTime = Math.max(duration - elapsedTime, 0);

      const milliseconds = Math.floor((remainingTime % 1000) / 10);
      const seconds = Math.floor((remainingTime / 1000) % 60);
      const minutes = Math.floor((remainingTime / 60000) % 60);
      const hours = Math.floor(remainingTime / 3600000);

      const displayMilliseconds = milliseconds.toString().padStart(2, '0');
      const displaySeconds = seconds.toString().padStart(2, '0');
      const displayMinutes = minutes.toString().padStart(2, '0');
      const displayHours = hours.toString().padStart(2, '0');

      durationElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;

      if (remainingTime <= 0) {
        clearInterval(durationInterval);
        durationElement.textContent = '00:00:00.00';
        toggleDurationButtons(false);
        alert('Duration timer has ended!');
      }
    }

    // Toggle Timer for Duration Button States
    function toggleDurationButtons(isRunning) {
      startDurationButton.disabled = isRunning;
      stopDurationButton.disabled = !isRunning;
    }

    // Validate Time Input
    function validateTime(time) {
      const regex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
      return regex.test(time);
    }
}
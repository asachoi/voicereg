/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


     var done = function() {

     }

     var checkPermission = function(hasPermission) {
        if(!hasPermission) {
            window.plugins.speechRecognition.requestPermission(done,failed)
            }
     }

     var getVoice = function(msg)
    {
	    $('#msg').val(msg.toString())
	    console.debug(msg)
    }

     var failed = function() {}

     let options = {
        language: 'en-US',
        showPartial: true,
        showPopup: true

    }



    $(function() {
        $(document.body).on('click tap', '#end', function() {
            $('#msg').append('stop capture\n')
            console.debug('end')
            window.plugins.speechRecognition.stopListening()
        } )

        $(document.body).on('click tap', '#start', function() {
            console.debug('start')
			//window.plugins.speechRecognition.getSupportedLanguages(getVoice, failed)
			$('#msg').append('Start capture\n')
			window.plugins.speechRecognition.hasPermission(checkPermission,failed)

			window.plugins.speechRecognition.startListening(getVoice, failed, options)
        } )
    })





var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);


    },



    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {




    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();
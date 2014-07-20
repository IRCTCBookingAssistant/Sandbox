type testdata\input001.txt | node app2.js > testdata\result001.txt
Compare-Object $(Get-Content testdata\output001.txt) $(Get-content testdata\result001.txt) -includeequal

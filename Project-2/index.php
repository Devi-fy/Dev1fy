<!DOCTYPE html>
<html>
<head>
    <title>Bug Reporting Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .form-group input[type="text"],
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .form-group textarea {
            height: 150px;
        }

        .btn-submit {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Report a Bug</h2>
        <form method="post" action="">
            <div class="form-group">
                <label for="bug-title">Bug Title:</label>
                <input type="text" name="bug_title" id="bug-title" required>
            </div>
            <div class="form-group">
                <label for="bug-description">Bug Description:</label>
                <textarea name="bug_description" id="bug-description" required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit Bug" class="btn-submit">
            </div>
        </form>
    </div>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $webhookUrl = "https://discord.com/api/webhooks/1108072923618607235/1iJXs-mGDZ_Er81qZbt_Nhwm7kqXoftPLhTkvvut7ntumrB884hcTPUD51wvKZmUIiko";
        $bugTitle = $_POST['bug_title'];
        $bugDescription = $_POST['bug_description'];

        $data = [
            "content" => "**Bug Title:** " . $bugTitle . "\n\n**Bug Description:** " . $bugDescription
        ];

        $options = [
            'http' => [
                'method' => 'POST',
                'header' => 'Content-Type: application/json',
                'content' => json_encode($data)
            ]
        ];

        $context = stream_context_create($options);
        $result = file_get_contents($webhookUrl, false, $context);

        if ($result !== false) {
            echo '<script>alert("Bug report submitted successfully!");</script>';
        } else {
            echo '<script>alert("Failed to submit bug report. Please try again later.");</script>';
        }
    }
    ?>
</body>
</html>

const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/882339685584764979/7g-P4Z0EYI1bmg5y2RYqWNm7zaafwPg-RfpRl1L3rcJQF8lXFJ6-A8AM8FAIY7YD5cx9");

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "Traderie Notification",
        avatar_url: "https://media.discordapp.net/attachments/881309262532472855/882262173479485480/standard.gif",
        content: "asd"
      }

      request.send(JSON.stringify(params));
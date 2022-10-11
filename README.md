# Songphile
A random music player which play songs according to your moods.

# Demo
[!demo](https://user-images.githubusercontent.com/49182604/195147981-351fdc48-12ac-4cc3-b774-dd8cabdb2f2c.mp4)

## Tools/Technology:
- HTML
- CSS
- Javascript
- Spotify web api

## Genres available
| Genre         |   No of Songs |
| ------------- |:-------------:|
| romantic     | 07 |
| sad     | 07     |
| energetic | 07     |
| fresh| 07     |


## Contribution guideline:

- If you want to contribute a new feature or resolve a bug you can create a issue then submit a pull request
- If you want to contribute by adding a new song then
  - Go to the /data.js file
  - Add the following code
  ```
    {
    genre: [Your genre],
    url: "the spotify url"
    },
  ```
  - If you create a new **genre** then update the readme **table** also
  - To the get the song's url read the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/)
    or
  - Click on the **``` ... ```** of your song
  - Click embed track
  - Check the ***show code***
  - Copy the ***src url*** only
  - Paste it
Now create a Pull request.

**If you like this project give it a 🌟**


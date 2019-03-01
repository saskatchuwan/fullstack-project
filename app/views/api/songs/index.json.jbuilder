json.songs do 
  @songs.each do |song|
    json.set! song.id do
      json.id song.id
      json.title song.title
      json.artist_id song.artist_id
      json.album_id song.album_id
    end
  end
end

json.artists do
  @songs.each do |song|
    json.set! song.artist.id do
      json.id song.artist.id
      json.name song.artist.name
    end
  end
end


json.albums do
  @songs.each do |song|
    json.set! song.album.id do
      json.id song.album.id
      json.title song.album.title
    end
  end
end





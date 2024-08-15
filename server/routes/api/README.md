# API Documentation

## Get All Books

### _Method_

`GET`

### _Description_

Returns the list of stored books, sorted in ascending creation order

### _URL_

`/api/books`

### _Response_

```json
[
  {
    "id": "982347s8-5s2d-950a-7a80-23423s89k82s",
    "author": "Jane Austen",
    "title": "Pride and Prejudice",
    "genres": ["Fiction"],
    "createdAt": 1605000000000
  },
  {
    "id": "341372b0-402d-450a-8a80-9066d2a3f309",
    "author": "Doris Kearns Goodwin",
    "title": "Team of Rivals",
    "genres": ["History"],
    "createdAt": 1605000000001
  },
  {
    "id": "2342s34-402d-450a-8a80-987234s89s9d8",
    "author": "N.K. Jemisin",
    "title": "The Fifth Season",
    "genres": ["Science Fiction", "Fantasy"],
    "createdAt": 1605000000002
  }
]
```

&nbsp;

## Get One Book

### _Method_

`GET`

### _Description_

Returns a single book

### _URL_

`/api/books/:id`

### _Request Params_

| Name | Value                                  |
| ---- | -------------------------------------- |
| id   | "982347s8-5s2d-950a-7a80-23423s89k82s" |

### Response

```json
[
  {
    "id": "982347s8-5s2d-950a-7a80-23423s89k82s",
    "author": "Jane Austen",
    "title": "Pride and Prejudice",
    "genres": ["Fiction"],
    "createdAt": 1605000000000
  }
]
```

&nbsp;

## Create A Book

### _Method_

`POST`

### _Description_

Creates a book and returns updated list of books, sorted in ascending creation order

### _URL_

`/api/books/create`

### Data Params

```javascript
{
  author: [string],
  genres: [array [string]]
  title: [string]
}

// sample POST data
{
  author: "Anne McCaffrey",
  genres: ["Science Fiction", "Fantasy"],
  title: "Dragonflight"
}
```

### Response

```json
[
  {
    "id": "982347s8-5s2d-950a-7a80-23423s89k82s",
    "author": "Jane Austen",
    "title": "Pride and Prejudice",
    "genres": ["Fiction"],
    "createdAt": 1605000000000
  },
  {
    "id": "341372b0-402d-450a-8a80-9066d2a3f309",
    "author": "Doris Kearns Goodwin",
    "title": "Team of Rivals",
    "genres": ["History"],
    "createdAt": 1605023492837
  },
  {
    "id": "2342s34-402d-450a-8a80-987234s89s9d8",
    "author": "N.K. Jemisin",
    "title": "The Fifth Season",
    "genres": ["Science Fiction", "Fantasy"],
    "createdAt": 1605031923732
  },
  {
    "id": "92374a-42j1-910w-23c8-sdf9234lsd0a",
    "author": "Anne McCaffrey",
    "title": "Dragonflight",
    "genres": ["Science Fiction", "Fantasy"],
    "createdAt": 1605041093721
  }
]
```

## Update A Book

### _Method_

`PUT`

### _Description_

Updates a book from the stored list and returns the updated list

### _URL_

`/api/books/update/:id`

### _Request Params_

| Name | Value                                  |
| ---- | -------------------------------------- |
| id   | "982347s8-5s2d-950a-7a80-23423s89k82s" |

### Data Params

```javascript
{
  author: [string],
  genres: [array [string]]
  title: [string]
}

// sample PUT data
{
  genres: ["Science Fiction", "Fantasy", "Adventure"],
}
```

### Response

```json
[
  {
    "id": "982347s8-5s2d-950a-7a80-23423s89k82s",
    "author": "Anne McCaffrey",
    "genres": ["Science Fiction", "Fantasy", "Adventure"],
    "title": "Dragonflight",
    "createdAt": 1605000000000
  },
  {
    "id": "341372b0-402d-450a-8a80-9066d2a3f309",
    "author": "Doris Kearns Goodwin",
    "title": "Team of Rivals",
    "genres": ["History"],
    "createdAt": 1605000000001
  },
  {
    "id": "2342s34-402d-450a-8a80-987234s89s9d8",
    "author": "N.K. Jemisin",
    "title": "The Fifth Season",
    "genres": ["Science Fiction", "Fantasy"],
    "createdAt": 1605000000002
  }
]
```

## Remove A Book

### _Method_

`DELETE`

### _Description_

Removes a book from the stored list and returns the updated list

### _URL_

`/api/books/remove/:id`

### _Request Params_

| Name | Value                                  |
| ---- | -------------------------------------- |
| id   | "982347s8-5s2d-950a-7a80-23423s89k82s" |

### Response

```json
[
  {
    "id": "341372b0-402d-450a-8a80-9066d2a3f309",
    "author": "Doris Kearns Goodwin",
    "title": "Team of Rivals",
    "genres": ["History"],
    "createdAt": 1605000000001
  },
  {
    "id": "2342s34-402d-450a-8a80-987234s89s9d8",
    "author": "N.K. Jemisin",
    "title": "The Fifth Season",
    "genres": ["Science Fiction", "Fantasy"],
    "createdAt": 1605000000002
  }
]
```

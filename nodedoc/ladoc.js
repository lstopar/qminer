/**
* Linear algebra module.
* @module la
* @example
* // import module, create a random matrix and a vector, multiply. find svd of the matrix
*/
/**
* Matrix constructor parameter object
* @typedef {Object} matrixArg
* @property  {number} matrixArg.rows - Number of rows.
* @property  {number} matrixArg.cols - Number of columns.
* @property  {boolean} [matrixArg.random=false] - Generate a random matrix with entries sampled from a uniform [0,1] distribution. If set to false, a zero matrix is created.
*/
/**
* Matrix
* @classdesc Represents a dense matrix (2d array).
* @class
* @param {(module:la~matrixArg | Array<Array<number>> | module:la.Matrix)} [arg] - Constructor arguments. There are three ways of constructing:
* <br>1. Parameter object module:la~matrixArg.
* <br>2. Nested array of matrix elements (row major). Example: [[1,2],[3,4]] has two rows, the first row is [1,2].
* <br>3. A matrix (copy constructor).
* @example
* // TODO
*/
 exports.Matrix = function(arg) {}	
/**
	* Returns an element of matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} Matrix element.
	*/
 exports.Matrix.prototype.at = function(rowIdx, colIdx) {}
/**
	* Sets an element of matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @param {number} num - Input value.
	* @returns {module:la.Matrix} Self.
	*/
 exports.Matrix.prototype.put = function(rowIdx, colIdx, num) {}
/**
	* Right-hand side multiplication of matrix with parameter.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Matrix | module:la.Vector)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	* @example
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* // create a new vector
	* var vec = new la.Vector([1, -1]);
	* //multiply mat and vec
	* var vec2 = mat.multiply(vec); // returns vector [-1, -6]
	*/
 exports.Matrix.prototype.multiply = function(arg) {}
/**
	* Matrix transpose and right-hand side multiplication of matrix with parameter.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Matrix | module:la.Vector)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	* @example
	* // create a new matrix
	* var mat = new la.Matrix([[1, 2], [-1, 5]]);
	* // create a new vector
	* var vec = new la.Vector([1, -1]);
	* //multiply mat and vec
	* var vec2 = mat.multiplyT(vec); // returns vector [2, 7]
	*/
 exports.Matrix.prototype.multiplyT = function(arg) {}
/**
	* Addition of two matrices.
	* @param {module:la.Matrix} mat - Second matrix.
	* @returns {module:la.Matrix} The sum of matrices.
	*/
 exports.Matrix.prototype.plus = function(mat2) {}
/**
	* Substraction of two matrices.
	* @param {module:la.Matrix} mat - Second matrix.
	* @returns {module:la.Matrix} The difference of matrices.
	*/
 exports.Matrix.prototype.minus = function(mat2) {}
/**
	* Transposes matrix.
	* @returns {module:la.Matrix} Transposed matrix.
	*/
 exports.Matrix.prototype.transpose = function() {}
/**
	* Solves the linear system.
	* @param {module:la.Vector} vec - The right-hand side of the equation.
	* @returns {module:la.Vector} Solution of the linear system.
	* @example
	* // create a new matrix
	* var M = new la.Matrix([[1, 2], [-1, -5]]);
	* // create a new vector
	* var b = new la.Vector([-1, -6]);
	* // solve the linear system M*x = b
	* var x = M.solve(b); // returns vector [1, -1]
	*/
 exports.Matrix.prototype.solve = function (vec) {}
/**
	* Returns a vector of row norms.
	* @returns {module:la.Vector} Vector, where the value at i-th index is the norm of the i-th row of matrix.
	*/
 exports.Matrix.prototype.rowNorms = function () {}
/**
	* Returns a vector of column norms.
	* @returns {module:la.Vector} Vector, where the value at i-th index is the norm of the i-th column of matrix.
	*/
 exports.Matrix.prototype.colNorms = function () {}
/**
	* Normalizes each column of matrix
	* @returns {module:la.Matrix} Self.
	*/
 exports.Matrix.prototype.normalizeCols = function () {}
/**
	* Returns the matrix as string.
	* @returns {string} Dense matrix as string.
	*/
 exports.Matrix.prototype.toString = function () {}
/**
	* Transforms the matrix from dense to sparse format.
	* @returns {module:la.SparseMatrix} Sparse column matrix representation of dense matrix.
	*/
 exports.Matrix.prototype.sparse = function () {}
/**
	* Returns the frobenious norm of matrix.
	* @returns {number} Frobenious norm of matrix.
	*/
 exports.Matrix.prototype.frob = function () {}
/**
	* Returns the number of rows of matrix.
	* @returns {number} Number of rows in matrix.
	*/
 exports.Matrix.prototype.rows = undefined
/**
	* Returns the number of columns of matrix.
	* @returns {number} Number of columns in matrix.
	*/
 exports.Matrix.prototype.cols = undefined
/**
	* Index of maximum element in given row.
	* @param {number} rowIdx - Row index (zero based).
	* @returns {number} Column index (zero based) of the maximum value in rowIdx-th row of matrix.
	*/
 exports.Matrix.prototype.rowMaxIdx = function (rowIdx) {}
/**
	* Returns index of maximum element in given column.
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} Row index (zero based) of the maximum value in colIdx-th column of matrix.
	*/
 exports.Matrix.prototype.colMaxIdx = function (colIdx) {}
/**
	* Returns the corresponding column of matrix as vector.
	* @param {number} colIdx - Column index (zero based).
	* @returns {module:la.Vector} The colIdx-th column of matrix.
	*/
 exports.Matrix.prototype.getCol = function (colIdx) {}
/**
	* Sets the column of matrix.
	* @param {number} colIdx - Column index (zero based).
	* @param {module:la.Vector} vec - The new column of matrix.
	* @returns {module:la.Matrix} Self.
	*/
 exports.Matrix.prototype.setCol = function (colIdx, vec) {}
/**
	* Returns the corresponding row of matrix as vector.
	* @param {number} rowIdx - Row index (zero based).
	* @returns {module:la.Vector} The rowIdx-th row of matrix.
	*/
 exports.Matrix.prototype.getRow = function (rowIdx) {}
/**
	* Sets the row of matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {module:la.Vector} vec - The new row of matrix.
	* @returns {module:la.Matrix} Self.
	*/
 exports.Matrix.prototype.setRow = function (rowIdx, vec) {}
/**
	* Returns the diagonal elements of matrix.
	* @returns {module:la.Vector} Vector containing the diagonal elements.
	*/
 exports.Matrix.prototype.diag = function () {}
/**
	* Saves the matrix as output stream.
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout
	*/
 exports.Matrix.prototype.save = function (fout) {}
/**
	* Loads the matrix from input stream.
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Matrix} Self.
	*/
 exports.Matrix.prototype.load = function (FIn) {}
/**
* Sparse Vector
* @classdesc Represents a sparse vector.
* @class
* @param {(Array<Array<number>> | module:la.SparseVector)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. Nested array of vector elements. Example: [[0,2],[2,3]] has two nonzero values, first value is 2 at position 0, second value is 3 at position 2.
* <br>2. A sparse vector (copy constructor).
* @param {number} [dim] - Maximal length of sparse vector. It is only in combinantion with nested array of vector elements.
* @example
* // create new sparse vector
* var spVec = new la.SparseVector([[0, 1], [2, 3], [3, 6]]); // sparse vector [1, 0, 3, 6]
* // create new sparse vector with dim
* var spVec2 = new la.SparseVector([[0, 1], [2, 3], [3, 6]], 5); // largest index (zero based) is 4
*/
 exports.SparseVector = function(arg, dim) {}	
/**
	* Returns an element of sparse vector.
	* @param {number} idx - Index (zero based).
	* @returns {number} Sparse vector element.
	*/
 exports.SparseVector.prototype.at = function (idx) {}
/**
	* Puts a new element in sparse vector.
	* @param {number} idx - Index (zero based).
	* @param {number} num - Input value.
	* @returns {module:la.SparseVector} Self.
	*/
 exports.SparseVector.prototype.put = function (idx, num) {}
/**
	* Returns the sum of all values in sparse vector.
	* @returns {number} The sum of all values in sparse vector.
	*/
 exports.SparseVector.prototype.sum = function () {}
/**
	* Returns the inner product of argument and sparse vector.
	* @param {(module:la.Vector | module:la.SparseVector)} arg - Inner product input. Supports dense vector and sparse vector.
	* @returns {number} The inner product.
	*/
 exports.SparseVector.prototype.inner = function (arg) {}
/**
	* Multiplies sparse vector with scalar.
	* @param {number} num - Scalar.
	* @returns {module:la.SparseVector} Product of num and sparse vector.
	*/
 exports.SparseVector.prototype.multiply = function (num) {}
/**
	* Normalizes the sparse vector.
	* @returns {module:la.SparseVector} Self - Normalized.
	*/
 exports.SparseVector.prototype.normalize = function () {}
/**
	* Returns the number of nonzero values.
	* @returns {number} Number of nonzero values.
	*/
 exports.SparseVector.prototype.nnz = undefined
/**
	* Returns the dimension of sparse vector.
	* @returns {number} Dimension of sparse vector.
	*/
 exports.SparseVector.prototype.dim = undefined
/**
	* Returns the norm of sparse vector.
	* @returns {number} Norm of sparse vector.
	*/
 exports.SparseVector.prototype.norm = function () {}
/**
	* Returns the dense vector representation of sparse vector.
	* @returns {module:la.Vector} Dense vector representation.
	*/
 exports.SparseVector.prototype.full = function () {}
/**
	* Returns a dense vector of values of nonzero elements of sparse vector.
	* @returns {module:la.Vector} Dense vector of values.
	*/
 exports.SparseVector.prototype.valVec = function () {}
/**
	* Returns a dense vector of indices (zero based) of nonzero elements of sparse vector.
	* @returns {module:la.Vector} Dense vector of indeces.
	*/
 exports.SparseVector.prototype.idxVec = function () {}
/**
	* Returns the sparse vector as string.
	* @returns {string} Sparse vector as string.
	*/
 exports.SparseVector.prototype.print = function () {}
/**
* Sparse Matrix
* @classdesc Represents a sparse matrix.
* @class
* @param {(Array<Array<Array<number>>> | module:la.SparseMatrix)} [arg] - Constructor arguments. There are two ways of constructing:
* <br>1. A nested array of sparse vectors (columns). A sparse vector is a nested array of pairs, first value is index, second is value.. Example: [[[0,2]], [[0, 1], [2,3]]] has 2 columns.
* The second nonzero element in second column has a value 3 at index 2.
* <br>2. A sparse matrix (copy constructor).
* @param {number} [rows] - Maximal number of rows in sparse vector. It is only in combinantion with nested array of vector elements.
* @example
* // create a new sparse matrix with array
* var mat = new la.SparseMatrix([[[0, 2]], [[0, 1], [2, 3]]]);
* // create a new sparse matrix with specified max rows
* var mat2 = new la.SparseMatrix([[[0, 2]], [[0, 1], [2, 3]]], 3);
*/
 exports.SparseMatrix = function(arg) {}	
/**
	* Returns an element of sparse matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @returns {number} Matrix value.
	*/
 exports.SparseMatrix.prototype.at = function (rowIdx, colIdx) {}
/**
	* Puts an element in sparse matrix.
	* @param {number} rowIdx - Row index (zero based).
	* @param {number} colIdx - Column index (zero based).
	* @param {number} num - Rlement value.
	* @returns {module:la.SparseMatrix} Self.
	*/
 exports.SparseMatrix.prototype.put = function (rowIdx, colIdx, num) {}
/**
	* Returns the column of sparse matrix.
	* @param {number} colIdx - Column index (zero based).
	* @returns {module:la.SparseVector} Sparse vector corresponding to the colIdx-th column of sparse matrix.
	*/
 exports.SparseMatrix.prototype.getCol = function (colIdx) {}
/**
	* Sets a column in sparse matrix.
	* @param {number} colIdx - Volumn index (zero based).
	* @param {module:la.SparseVector} spVec - New column sparse vector.
	* @returns {module:la.SparseMatrix} Self.
	*/
 exports.SparseMatrix.prototype.setCol = function (colIdx, spVec) {}
/**
	* Attaches a column to sparse matrix.
	* @param {module:la.SparseVector} spVec - Attached column as sparse vector.
	* @returns {module:la.SparseMatrix} Self.
	*/
 exports.SparseMatrix.prototype.push = function (spVec) {}
/**
	* Multiplies argument with sparse vector.
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Vector | module:la.Matrix)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	*/
 exports.SparseMatrix.prototype.multiply = function (arg) {}
/**
	* Sparse matrix transpose and multiplies with argument
	* @param {(number | module:la.Vector | module:la.SparseVector | module:la.Matrix | module:la.SparseMatrix)} arg - Multiplication input. Supports scalar, vector and matrix input.
	* @returns {(module:la.Vector | module:la.Matrix)}
	* <br>1. {@link module:la.Matrix}, if arg is number, {@link module:la.Matrix} or {@link module:la.SparseMatrix}.
	* <br>2. {@link module:la.Vector}, if arg is {@link module:la.Vector} or {@link module:la.SparseVector}.
	*/
 exports.SparseMatrix.prototype.multiplyT = function (arg) {}
/**
	* Returns the sum of two matrices.
	* @param {module:la.SparseMatrix} mat - Second sparse matrix.
	* @returns {module:la.SparseMatrix} Sum of two sparse matrices.
	*/
 exports.SparseMatrix.prototype.plus = function (spMat) {}
/**
	* Returns the difference of two matrices.
	* @param {module:la.SparseMatrix} mat - Second sparse matrix.
	* @returns {module:la.SparseMatrix} The difference of two sparse matrices.
	*/
 exports.SparseMatrix.prototype.minus = function (spMat) {}
/**
	* Returns the transposed sparse matrix.
	* @returns {module:la.SparseMatrix} Transposed sparse matrix.
	*/
 exports.SparseMatrix.prototype.transpose = function () {}
/**
	* Returns the vector of column norms of sparse matrix.
	* @returns {module:la.Vector} Vector of column norms. Ihe i-th value of said vector is the norm of i-th column of sparse matrix.
	*/
 exports.SparseMatrix.prototype.colNorms = function () {}
/**
	* Normalizes columns of sparse matrix.
	* @returns {module:la.SparseMatrix} Self - Normalized columns.
	*/
 exports.SparseMatrix.prototype.normalizeCols = function () {}
/**
	* Returns the dense representation of sparse matrix.
	* @returns {module:la.Matrix} Dense representation of sparse matrix.
	*/
 exports.SparseMatrix.prototype.full = function () {}
/**
	* Returns the frobenious norm of sparse matrix.
	* @returns {number} Frobenious norm of sparse matrix.
	*/
 exports.SparseMatrix.prototype.frob = function () {}
/**
	* Number of rows of sparse matrix.
	* @returns {number} Number of rows of sparse matrix.
	*/
 exports.SparseMatrix.prototype.rows = undefined
/**
	* Number of columns of sparse matrix.
	* @returns {number} Number of columns of sparse matrix.
	*/
 exports.SparseMatrix.prototype.cols = undefined
/**
	* Returns the sparse matrix as string.
	* @returns {string} Sparse matrix as string. The first column represents row indeces, second column represents column indeces, third column represents value.
	*/
 exports.SparseMatrix.prototype.print = function () {}
/**
	* Saves the sparse matrix as output stream.
	* @param {module:fs.FOut} fout - Output stream.
	* @returns {module:fs.FOut} fout.
	*/
 exports.SparseMatrix.prototype.save = function (fout) {}
/**
	* Loads the sparse matrix from input stream.
	* @param {module:fs.FIn} fin - Input stream.
	* @returns {module:la.Matrix} Self.
	*/
 exports.SparseMatrix.prototype.load = function (FIn) {}